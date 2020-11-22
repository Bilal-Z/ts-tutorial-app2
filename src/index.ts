import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 0, -3, 88, -5]);
const charactersCollection = new CharactersCollection('XaabSy');
const linkedList = new LinkedList();
linkedList.add(-11);
linkedList.add(600);
linkedList.add(-50);
linkedList.add(7);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
