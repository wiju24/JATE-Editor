import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented');

const jateDB = await openDB('jate', 1);
const tx = jateDB.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({jate:content});

const result = await request

console.log("Database has saved this Information!", result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');

const pullJateDB = await openDB ('jate', 1);
const pullTx = pullJateDB.transaction('jate', 'readonly');
const pullStore = pullTx.objectStore('jate');
const pullRequest = pullStore.getAll()

const result = await pullRequest;

console.log("Database has saved this Information!", result);
}

initdb();
