import { User } from 'src/app/models/user';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = []

  ngOnInit(): void {
      this.retreiveAllUser()
  }

  constructor(private githubService: GithubService) {}

  retreiveAllUser() {
    this.githubService.getUsers().subscribe((response) => { 
       this.users = response
     })
  }

}
