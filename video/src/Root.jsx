import {Composition} from 'remotion';
import {Robot} from './Robot.jsx';

// Default props let the composition open in Remotion Studio; real renders pass
// props built by scripts/build-robot.mjs (sentence timings measured from the audio).
const defaultProps = {
  id: 'opp',
  lang: 'en',
  name: 'Opportunity',
  emoji: '🔭',
  years: '2004–2019',
  world: 'mars',
  total: 300,
  sentences: [{text: 'Preview', audio: null, from: 20, dur: 60}],
};

export const Root = () => (
  <Composition
    id="Robot"
    component={Robot}
    width={1280}
    height={720}
    fps={30}
    durationInFrames={300}
    defaultProps={defaultProps}
    calculateMetadata={({props}) => ({durationInFrames: props.total})}
  />
);
