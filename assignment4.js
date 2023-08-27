function findAddress(obj) {
  if(typeof obj !=="object"){
    return "plese provide valid object"
  }
  else{
    const street= obj.street || '__' ;
    const house= obj.house || '__' ;
    const societyt= obj.society || '__' ;

    return  +street +',' + house +','+ societyt
   
  }
}

const property={
  street:10,
  house:'15A',
  society:'Earth Perfect'
}

console.log(findAddress(property))