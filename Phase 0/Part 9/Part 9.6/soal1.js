function changeMe(arr) {
  
    for(let i = 0; i < arr.length; i++) {
      let person = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: arr[i][3] ? new Date().getFullYear()-arr[i][3] : 'Invalid Birth Year'
      };
  
      console.log(`${person.firstName} ${person.lastName}: `);
      console.log(person);
    };
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""