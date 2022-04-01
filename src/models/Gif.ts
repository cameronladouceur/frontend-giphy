// An interface within an interface. Original is nested within Images which is nested within Gif
interface Original {
  url: string;
}

// Doesn't need to be exported cause its only used in the Gif interface.
interface Images {
  original: Original;
}

export default interface Gif {
  id: string;
  url: string;
  uid?: string;
  title: string;
  images: Images;
  username: string;
  import_datetime: string;
}
