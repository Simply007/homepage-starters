const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  // abstract interfaces
  // actions.createTypes(/* GraphQL */ `
  //   interface HomepageBlock implements Node {
  //     id: ID!
  //     blocktype: String
  //   }

  //   interface kontent_homepage_block implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     system: kontent_item_system!
  //     preferred_language: String!
  //   }

  //   interface HomepageLink implements Node {
  //     id: ID!
  //     href: String
  //     text: String
  //   }

  //   interface HeaderNavItem implements Node {
  //     id: ID!
  //     navItemType: String
  //   }

  //   interface NavItem implements Node & HeaderNavItem {
  //     id: ID!
  //     navItemType: String
  //     href: String
  //     text: String
  //     icon: HomepageImage
  //     description: String
  //   }

  //   interface NavItemGroup implements Node & HeaderNavItem {
  //     id: ID!
  //     navItemType: String
  //     name: String
  //     navItems: [NavItem]
  //   }

  //   interface HomepageImage implements Node {
  //     id: ID!
  //     alt: String
  //     gatsbyImageData: JSON @imagePassthroughArgs
  //     url: String
  //   }

  //   type kontent_asset_homepage_image implements Node & HomepageImage {
  //     id: ID!
  //     alt: String
  //     gatsbyImageData: JSON @imagePassthroughArgs
  //     url: String
  //   }

  //   interface HomepageHero implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String!
  //     kicker: String
  //     subhead: String
  //     image: HomepageImage
  //     text: String
  //     links: [HomepageLink]
  //   }

  //   interface HomepageFeature implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String
  //     kicker: String
  //     text: String
  //     image: HomepageImage
  //     links: [HomepageLink]
  //   }

  //   interface HomepageFeatureList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     kicker: String
  //     heading: String
  //     text: String
  //     content: [HomepageFeature]
  //   }

  //   interface HomepageCta implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     kicker: String
  //     heading: String
  //     text: String
  //     image: HomepageImage
  //     links: [HomepageLink]
  //   }

  //   interface HomepageLogo implements Node {
  //     id: ID!
  //     image: HomepageImage
  //     alt: String
  //   }

  //   interface HomepageLogoList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     text: String
  //     logos: [HomepageLogo]
  //   }

  //   interface HomepageTestimonial implements Node {
  //     id: ID!
  //     quote: String
  //     source: String
  //     avatar: HomepageImage
  //   }

  //   interface HomepageTestimonialList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     kicker: String
  //     heading: String
  //     content: [HomepageTestimonial]
  //   }

  //   interface HomepageBenefit implements Node {
  //     id: ID!
  //     heading: String
  //     text: String
  //     image: HomepageImage
  //   }

  //   interface HomepageBenefitList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String
  //     text: String
  //     content: [HomepageBenefit]
  //   }

  //   interface HomepageStat implements Node {
  //     id: ID!
  //     value: String
  //     label: String
  //     heading: String
  //   }

  //   interface HomepageStatList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     kicker: String
  //     heading: String
  //     text: String
  //     image: HomepageImage
  //     icon: HomepageImage
  //     content: [HomepageStat]
  //     links: [HomepageLink]
  //   }

  //   interface HomepageProduct implements Node {
  //     id: ID!
  //     heading: String
  //     text: String
  //     image: HomepageImage
  //     links: [HomepageLink]
  //   }

  //   interface HomepageProductList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String
  //     kicker: String
  //     text: String
  //     content: [HomepageProduct]
  //   }

  //   interface Homepage implements Node {
  //     id: ID!
  //     title: String
  //     description: String
  //     image: HomepageImage
  //     content: [HomepageBlock]
  //   }

  //   interface LayoutHeader implements Node {
  //     id: ID!
  //     navItems: [HeaderNavItem]
  //     cta: HomepageLink
  //   }

  //   enum SocialService {
  //     TWITTER
  //     FACEBOOK
  //     INSTAGRAM
  //     YOUTUBE
  //     LINKEDIN
  //     GITHUB
  //     DISCORD
  //     TWITCH
  //   }

  //   interface SocialLink implements Node {
  //     id: ID!
  //     username: String!
  //     service: SocialService!
  //   }

  //   interface LayoutFooter implements Node {
  //     id: ID!
  //     links: [HomepageLink]
  //     meta: [HomepageLink]
  //     socialLinks: [SocialLink]
  //     copyright: String
  //   }

  //   interface Layout implements Node {
  //     id: ID!
  //     header: LayoutHeader
  //     footer: LayoutFooter
  //   }

  //   interface AboutPage implements Node {
  //     id: ID!
  //     title: String
  //     description: String
  //     image: HomepageImage
  //     content: [HomepageBlock]
  //   }

  //   interface AboutHero implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String
  //     text: String
  //     image: HomepageImage
  //   }

  //   interface AboutStat implements Node {
  //     id: ID!
  //     value: String
  //     label: String
  //   }

  //   interface AboutStatList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     content: [AboutStat]
  //   }

  //   interface AboutProfile implements Node {
  //     id: ID!
  //     image: HomepageImage
  //     name: String
  //     jobTitle: String
  //   }

  //   interface AboutLeadership implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     kicker: String
  //     heading: String
  //     subhead: String
  //     content: [AboutProfile]
  //   }

  //   interface AboutLogoList implements Node & HomepageBlock {
  //     id: ID!
  //     blocktype: String
  //     heading: String
  //     links: [HomepageLink]
  //     logos: [HomepageLogo]
  //   }

  //   interface Page implements Node {
  //     id: ID!
  //     slug: String!
  //     title: String
  //     description: String
  //     image: HomepageImage
  //     html: String!
  //   }
  // `)
}