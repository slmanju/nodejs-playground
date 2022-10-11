// before
// function getUserCommits(id, callback) {
//   getUser(id, function(user) {
//     getCommits(user.username, function(commits) {
// 	  callback(commits);
// 	});
//   });
// }

// function getUser(userId, callback) {
//   setTimeout(() => {
// 	callback({ id: userId, username: 'AName' });
//   }, 1000);
// }

// function getCommits(username, callback) {
//   setTimeout(() => {
// 	callback([ 'commit-1', 'commit-2']);
//   }, 1000);
// }

// getUserCommits(1, function(commits) {
//   console.log(commits);
// });

// now
function getUserCommits(id) {
  return getUser(id).then(user => getCommits(user.username));
}

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
	  resolve({ id: userId, username: 'AName' });
	}, 1000);
  });
}

function getCommits(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
	  resolve([ 'commit-1', 'commit-2']);
	}, 1000);
  });
}

getUserCommits(1).then(commits => console.log(commits));
