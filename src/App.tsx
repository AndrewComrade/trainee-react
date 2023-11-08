import React from 'react';
import styles from './App.scss';
import {AppRouter} from "@/components/AppRouter/AppRouter";

function App() {
  return (
      <main className={styles.App}>
        <AppRouter/>
      </main>
  );
}

export default App;
