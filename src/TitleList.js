import React from 'react';
import './TitleList.css';
import _ from 'lodash';

const getPosts = posts =>
  posts.map(post => 
    <li key={post.id}>{ post.title }</li>
  );

// posts
// sort "", "ascending", "descending"
class TitleList extends React.PureComponent {
  renderPosts(posts, sort) {
    if (!sort) {
      return getPosts(posts);
    } else {
      const sortedAscending = _.sortBy(posts, ['title']);
      return sort === "descending"
        ? getPosts(sortedAscending.reverse())
        : getPosts(sortedAscending);
    }
  }

  render() {
    return <div className="Title-List">
      <ul>
        { this.renderPosts(this.props.posts, this.props.sort) }
      </ul>
    </div>
  }
}

export default TitleList;