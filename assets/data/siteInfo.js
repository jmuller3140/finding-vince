module.exports = {
  siteTitle: "Finding Vince Film Festival", // Site title.
  siteTitleShort: "FVFF", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Finding Vince", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Advanced User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "New York, New York", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  pageInfo: {
    'About': {
      title: 'FVFF | About',
      description: '',
      ogTitle: '',
      ogImage: '',
      ogUrl: '',
      ogType: 'website',
      bannerTitle: 'About Us',
      bannerImg: '/static/pics/filmCover.jpg',
      sections: [{
        title: 'Who are we?',
        description: "Finding Vince 400 is a competition and festival for people of all voices. It is inspired by the 400th Anniversary of the charism of St. Vincent DePaul. Finding Vince 400 is part of the the Vincentian Family's Initiative to globalize charity."
      },
      {
        title: 'Mission',
        description: "Champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity."
      },
      {
        title: 'The Team',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus elit, sodales a mattis vitae, tempor nec urna. Duis aliquam risus ac viverra molestie. Aliquam quis ex est. Maecenas sit amet massa ut arcu rutrum aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dictum turpis vel felis luctus dapibus. Quisque rutrum maximus pellentesque. Fusce et odio non risus tincidunt venenatis. Integer eleifend porta nisi eu finibus. Vivamus faucibus fermentum tellus, vitae cursus nibh dictum eu. Nam facilisis malesuada eros vitae tincidunt. Sed tincidunt metus a enim auctor, a sollicitudin lectus volutpat. Sed eget elit rhoncus diam luctus consectetur.'
      }]
    },
    'Artists': {
      title: 'FVFF | Artists',
      description: '',
      ogTitle: '',
      ogImage: '',
      ogUrl: '',
      ogType: 'website',
      bannerTitle: 'Artists',
      bannerImg: '/static/pics/filmCover.jpg',
      sections: [{
        title: 'Seeds of Hope Competition',
        description: "All those under the age of 18 are invited to create seeds of hope, we call upon you to utilize any creative expression" +
          "(story, poetry, image, sculpture, music, etc.) that inspires direct service to the poor. Jury-selected artists will be invited to the festival " +
          "and awarded a trip to  Castel Gondolfo, Italy, from Octover 18-21, 2018. <br />" +
          "Please upload a video, image or document that best showcases your artwork.<br /> Due by 8/31/18, submit through email at submit@fv400@org or at fv400.org"
      },
      {
        title: 'Screenwriting Competition',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit libero in enim rhoncus condimentum. Sed in bibendum nisl, quis volutpat nisi. Curabitur ut rutrum magna. Duis pharetra ligula in turpis imperdiet, nec dapibus nunc dictum. Ut tincidunt, lacus quis lacinia iaculis, magna arcu iaculis ante, sed volutpat felis nibh id quam. Pellentesque dignissim scelerisque velit, et dapibus dolor. Mauris est neque, posuere consectetur blandit a, mollis eu lectus. Nulla viverra ligula vel turpis mattis pellentesque. In vitae metus erat. Maecenas ut velit efficitur, egestas dolor nec, dapibus nulla. Donec sed porttitor nibh, ac feugiat leo. Maecenas in arcu a leo elementum aliquet sed vel urna. Suspendisse sodales, nisi vel laoreet feugiat, mauris eros suscipit ipsum, tristique commodo ante ligula a sem. Nullam ac magna sed odio dictum aliquet."
      },
      {
        title: 'Feature or Short Competition',
        description: "You are invited to submit your feature film or short to Finding Vince 400. The jury will select films that inspire a direct service " +
          "to the poor and change our perspecitive on poverty. These films will premiere at Castel Gondolfo, Italy from October 18-21, 2018. " +
          "Jury selected artists will be invited and awawrded a trip to this event. Due by 8/31/18, submit at FV400.org"
      }]
    },
    'Contact': {
      title: 'FVFF | Contact',
      description: '',
      ogTitle: '',
      ogImage: '',
      ogUrl: '',
      ogType: 'website',
      bannerTitle: 'Contact',
      bannerImg: '/static/pics/filmCover.jpg',
      sections: [{
        title: 'Who are we?',
        description: "Finding Vince 400 is a competition and festival for people of all voices. It is inspired by the 400th Anniversary of the charism of St. Vincent DePaul. Finding Vince 400 is part of the the Vincentian Family's Initiative to globalize charity."
      },
      {
        title: 'Mission',
        description: "Champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity."
      },
      {
        title: 'The Team',
        description: 'Who are we?'
      }]
    },
    'Media': {
      title: 'FVFF | Media',
      description: '',
      ogTitle: '',
      ogImage: '',
      ogUrl: '',
      ogType: 'website',
      bannerTitle: 'Media',
      bannerImg: '/static/pics/filmCover.jpg',
      sections: [{
        title: 'Who are we?',
        description: "Finding Vince 400 is a competition and festival for people of all voices. It is inspired by the 400th Anniversary of the charism of St. Vincent DePaul. Finding Vince 400 is part of the the Vincentian Family's Initiative to globalize charity."
      },
      {
        title: 'Mission',
        description: "Champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity."
      },
      {
        title: 'The Team',
        description: 'Who are we?'
      }]
    },
    'Home': {
      title: 'FVFF | Home',
      description: '',
      ogTitle: '',
      ogImage: '',
      ogUrl: '',
      ogType: 'website',
      bannerTitle: 'Home',
      bannerImg: '/static/pics/filmCover.jpg',
      sections: [{
        title: 'Who are we?',
        description: "Finding Vince 400 is a competition and festival for people of all voices. It is inspired by the 400th Anniversary of the charism of St. Vincent DePaul. Finding Vince 400 is part of the the Vincentian Family's Initiative to globalize charity."
      },
      {
        title: 'Mission',
        description: "Champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity."
      },
      {
        title: 'The Team',
        description: 'Who are we?'
      }]
    }
  },
  copyright: "Copyright © 2018. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
}