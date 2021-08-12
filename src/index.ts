import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 4, 19, -9, 9]);
const charactersCollection = new CharactersCollection('Testing');
numbersCollection.sort();
console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-33);
linkedList.add(33);
linkedList.add(87);
linkedList.add(-3);

linkedList.sort();
linkedList.print();
