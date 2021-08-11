import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 4, 19, -9, 9]);
const charactersCollection = new CharactersCollection('Testing');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
