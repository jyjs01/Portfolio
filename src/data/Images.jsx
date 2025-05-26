const connectHubImages = Object.values(
  import.meta.glob('../assets/ConnectHub/*.png', { eager: true })
).map(m => m.default);

const coursePlateImages = Object.values(
  import.meta.glob('../assets/CoursePlate/*.png', { eager: true })
).map(m => m.default);

const ircImages = Object.values(
  import.meta.glob('../assets/IRC/*.png', { eager: true })
).map(m => m.default);

const noticeCounselImages = Object.values(
  import.meta.glob('../assets/NoticeCounsel/*.png', { eager: true })
).map(m => m.default);

export const projectImages = {
  connectHub: connectHubImages,
  coursePlate: coursePlateImages,
  irc: ircImages,
  noticeCounsel: noticeCounselImages,
};