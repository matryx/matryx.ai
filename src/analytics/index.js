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

    window.analytics.track('Whitepaper', {
      category: 'Information',
      label: 'whitepaper'
    })
  },

  socialMediaClick (media, location) {
    window.analytics.track(`${media} Link - ${location}`, {
      category: 'Social',
      label: `${media}Link`
    })
  }
}

export { appAnalytics }
