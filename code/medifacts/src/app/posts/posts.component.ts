import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
//  styleUrls: ['./tasks.page.scss'],
})

export class PostsPage  implements  OnInit{

  
 posts$ = collectionData(collection(this.firestore, 'posts' )) as Observable<Post[]>;
  constructor(public router: Router, private readonly firestore: Firestore ) {}
  ngOnInit(): void {
      
  }
}

// export interface Post{
//   user: string;
//   post_text: string;
// }
