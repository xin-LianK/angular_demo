import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HnService {
    endpoint = 'https://hnpwa.com/api/v0/news.json';
    constructor(private http: HttpClient) { }
    getTopPosts() {
        return this.http.get(this.endpoint);
    }
    getPost(postId: string) {
        const endpoint = 'https://hnpwa.com/api/v0/item';
        return this.http.get(`${endpoint}/${postId}.json`);
    }
}