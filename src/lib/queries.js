export const GET_SITE_SETTINGS = `
  query SiteSettings {
    pages(where: {name: "site-settings"}) {
      nodes {
        siteSettings {
          brandName
          logoUrl
          addressLine1
          addressLine2
          addressLine3
          phone
          phoneLink
          contactButtonText
          contactButtonUrl
          footerTagline
          socialYoutube
          socialTwitter
          socialLinkedin
          socialInstagram
          socialFacebook
          copyrightText
        }
      }
    }
  }
`;
