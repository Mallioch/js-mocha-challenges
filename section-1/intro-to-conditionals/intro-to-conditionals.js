function fullName(firstName, lastName, middleInitial) {

  if (lastName === undefined) {
    return firstName;
  }

  if (middleInitial === undefined) {
    return firstName + ' ' + lastName;
  }

  return firstName + ' ' + middleInitial + ' ' + lastName;
}
