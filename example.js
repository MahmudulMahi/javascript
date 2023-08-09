function sortMaker(array) {
    const [firstElement, secondElement] = array;

    if (secondElement > 0) {
        return array.sort((a, b) => b - a);
    } else if (firstElement === secondElement) {
        return "equal";
    } 
}


