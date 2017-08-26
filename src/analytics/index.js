// Group all analytics here so we can see them at a glance
// Import into components
import { getlStorage } from '../utils'

const appAnalytics = {
  surveyModal (email, intendedAmount) {
    // Call Identify again so Mailchimp tags are updated
    window.analytics.identify(email, {
      'Intent Amount': `${intendedAmount}`
    })
    // Track Intent for Google Analytics
    window.analytics.track(`${intendedAmount} ETH Intent`, {
      category: 'Intent',
      label: `${intendedAmount}eth`
    })
  },

  whitePaperClick (location) {
    if (getlStorage('email')) {
      window.analytics.identify(getlStorage('email'), {
        'Whitepaper': `Opened_${location}`
      })
    }

    window.analytics.track('read', {
      category: 'information',
      label: 'whitepaper'
    })
  },

  socialMediaClick (media, location) {
    window.analytics.track(`${media} Link - ${location}`, {
      category: 'Social',
      label: `${media}Link`
    })
  },

  emailSignup (email, traits, ctaLocation) {
    window.analytics.identify(email, traits)

    window.analytics.track(`CTA ${ctaLocation} Click`, {
      category: 'Get Notified',
      label: `cta-${ctaLocation}`
    })

    window.analytics.track('submit', {
      category: 'email',
      label: 'get-notified'
    })
  }
}

export { appAnalytics }
