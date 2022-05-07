var list= [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
let uniques_list = [];
for (i of list) {
  for (j in i) {
      if (!uniques_list.includes(i[j])) { 
        uniques_list.push(i[j]);
      }
  }
}
console.log(uniques_list);