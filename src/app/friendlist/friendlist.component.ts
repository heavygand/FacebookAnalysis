import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from './Friend';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.scss']
})
export class FriendlistComponent implements OnInit {

  hasAppState: any;
  appStatePath = 'C:\\Users\\cwiegand\\Desktop\\appstate.json';
  fs = window.require("fs");
  login = window.require("facebook-chat-api");
  appState: any;
  friends: Friend[] = [];
  displayedColumns: string[] = [
                                'alternateName',
                                'firstName',
                                'gender',
                                'userID',
                                'isFriend',
                                'fullName',
                                'profilePicture',
                                'type',
                                'profileUrl',
                                'vanity',
                                'isBirthday'
                              ];
  dataSource = new MatTableDataSource<Friend>();

  constructor(private router: Router) { }

  ngOnInit() {

    this.hasAppState = this.fs.existsSync(this.appStatePath);

    if(!this.hasAppState){
      
      this.router.navigate(['/']);
      return;
    }

    this.appState = JSON.parse(this.fs.readFileSync(this.appStatePath, 'utf8'));
    console.log("AppState disk load successfull");
    this.loadFriendList();
  }

  loadFriendList(){

    console.log("Loading Friendlist");
    this.login({appState: this.appState}, (err, api) => {

      if(err) return console.error(err);
      console.log("AppState used for login");

      this.fs.writeFileSync(this.appStatePath, JSON.stringify(api.getAppState()));

      api.getFriendsList((err, friendsArray) => {

        if(err) return console.error(err);
        console.log("friendlist load successfull.");
        console.log(friendsArray.length + " friends.");

        this.friends = friendsArray;
        this.refresh();
      });
    });
  }

  refresh() {
    
    this.dataSource.data = this.friends;
  }
}
