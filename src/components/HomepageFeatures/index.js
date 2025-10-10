import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FaGamepad, FaDiscord, FaPatreon } from 'react-icons/fa';

const FeatureList = [
  {
    title: (
      <>
        Plugins de Minecraft <FaGamepad />
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SkeldriaX cuenta con plugins de Minecraft. En especial contamos con 3 plugins en desarrollo:
        SkeldriaMOTD, SkeldriaSB y SkeldriaTAB.
      </>
    ),
  },
  {
    title: (
      <>
        Bots de Discord <FaDiscord />
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SkeldriaX también cuenta con 2 bots de Discord: SkeldriaBot y SkeldriaSecurity.
      </>
    ),
  },
  {
    title: (
      <>
        Patrocinios <FaPatreon />
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        De momento no tenemos patrocinadores. Si te gustaría aparecer aquí y patrocinar el proyecto,
        puedes visitar la página de patrocinios en el menú superior.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

