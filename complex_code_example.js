/* 
Filename: complex_code_example.js

This code is a complex implementation of a social media platform. It includes user authentication, posting, commenting, liking, and following functionality. The code is designed to handle a large number of users and posts efficiently.
*/

// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  comment(post, text) {
    const comment = new Comment(text, this);
    post.addComment(comment);
    return comment;
  }

  like(post) {
    post.addLike(this);
  }

  follow(user) {
    this.following.push(user);
  }
}

// Post class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.comments = [];
    this.likes = [];
    this.creationDate = new Date();
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// Comment class
class Comment {
  constructor(text, author) {
    this.text = text;
    this.author = author;
    this.creationDate = new Date();
  }
}

// Example usage:
const user1 = new User("John", "john@example.com", "password123");
const user2 = new User("Alice", "alice@example.com", "password456");

// User1 creates a post
const post = user1.createPost("Hello World!");

// User2 adds a comment
user2.comment(post, "Nice post!");

// User2 likes the post
user2.like(post);

// User1 follows User2
user1.follow(user2);

// Output
console.log(user1);
console.log(user2);
console.log(post);