// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Article from './Article'

export const generated = () => {
  return <Article />
}

export default {
  title: 'Components/Article',
  component: Article,
}
