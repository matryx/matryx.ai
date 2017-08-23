// Group all analytics here so we can see them at a glance
// Import into components

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
  }
}

export { appAnalytics }
