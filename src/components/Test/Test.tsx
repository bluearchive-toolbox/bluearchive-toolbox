import React, { useState } from 'react';
import styles from './Test.module.scss';
import characters from '../../assets/jsons/characters.json';

const Test = ({}: {}) => {
  const [index, setIndex] = useState(-1);

  return(
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {
          characters.map((character: any, index: number) =>
            <div className={styles.element} onClick={() => setIndex(index)}>
              { character.DevName }
            </div>
          )
        }
      </div>
      <div className={styles.character}>
        {
          characters[index] &&
          <Character character={characters[index]} />
        }
      </div>
    </div>
  )
};

const Character = ({ character } : { character: any }) => {

  return(
    <div>
      {
        Object.keys(character).map((key) =>
          <div key={key}>{ key } : { character[key] }</div>
        )
      }
    </div>
  )
};

export default Test;