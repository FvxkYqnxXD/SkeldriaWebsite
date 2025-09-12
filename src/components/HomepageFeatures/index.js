import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plugins de Minecraft',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SkeldriaX cuenta con plugins de minecraft, en epecial contamos con 3 plugins en trabajo
	los cuales son SkeldriaMOTD, SkeldriaSB y SkeldriaTAB.
      </>
    ),
  },
  {
    title: 'Bots de Discord',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SkeldriaX tambien cuenta con 2 bots de discord, en especial contamos con SkeldriaBot
	y con SkeldriaSecurity.
      </>
    ),
  },
  {
    title: 'Patrocinios',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        De momento no tenemos patrocinadores, si te gustaría aparecer aquí y patrocinar el projecto
	puedes ir a la pagina de patrocinios en el menu superior.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
