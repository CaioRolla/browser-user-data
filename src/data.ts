import { SocialMedia } from "./types";

export const networks = [
  {
    url: "https://squareup.com/login?return_to=%2Ffavicon.ico",
    name: SocialMedia.SQUARE
  },
  {
    url: "https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",
    name: SocialMedia.INSTAGRAM
  },
  {
    url: "https://twitter.com/login?redirect_after_login=%2Ffavicon.ico",
    name: SocialMedia.TWITTER
  },
  {
    url: "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: SocialMedia.FACEBOOK
  },
  {
    url: "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=de&service=youtube",
    name: SocialMedia.GOOGLE
  },
  {
    url: "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
    name: SocialMedia.SKYPE
  },
  // Doens't work anymore
  // {
  //   url: "https://www.flickr.com/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",
  //   name: SocialMedia.FLICKR
  // },
  {
    url: "https://www.spotify.com/de/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    name: SocialMedia.SPOTIFY
  },
  {
    url: "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    name: SocialMedia.REDDIT
  },
  {
    url: "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
    name: SocialMedia.TUMBLR
  },
  {
    url: "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    name: SocialMedia.EXPEDIA
  },
  {
    url: "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Ficons%2Ficon_spacer-vflN3BYt2.gif",
    name: SocialMedia.DROPBOX
  },
  {
    url: "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    name: SocialMedia.AMAZON
  },
  {
    url: "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    name: SocialMedia.PINTEREST
  },
  {
    url: "https://www.netflix.com/Login?nextpage=%2Ffavicon.ico",
    name: SocialMedia.NETFLIX
  },
  {
    url: "https://de.foursquare.com/login?continue=%2Ffavicon.ico",
    name: SocialMedia.FOURSQUARE
  },
  {
    url: "https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",
    name: SocialMedia.BATTLE_NET
  },
  {
    url: "https://store.steampowered.com/login/?redir=favicon.ico",
    name: SocialMedia.STEAM
  },
  {
    url: "https://www.academia.edu/login?cp=/favicon.ico&cs=www",
    name: SocialMedia.ACADEMIA_EDU
  },
  {
    url: "https://stackoverflow.com/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",
    name: SocialMedia.STACK_OVERFLOW
  },
  {
    url: "https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
    name: SocialMedia.BLOGGER
  }
];


