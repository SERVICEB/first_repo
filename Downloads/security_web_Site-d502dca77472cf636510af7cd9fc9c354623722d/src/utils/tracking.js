// Système de tracking complet pour le site de sécurité
// Google Analytics, Facebook Pixel et capture de leads

// Configuration des IDs de tracking
const TRACKING_CONFIG = {
  googleAnalytics: 'G-XXXXXXXXXX', // Remplacer par votre ID GA4
  facebookPixel: 'XXXXXXXXXXXXXX', // Remplacer par votre ID Facebook Pixel
};

// Fonction pour initialiser Google Analytics 4
export const initGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + TRACKING_CONFIG.googleAnalytics;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', TRACKING_CONFIG.googleAnalytics);
  }
};

// Fonction pour initialiser Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    window.fbq('init', TRACKING_CONFIG.facebookPixel);
    window.fbq('track', 'PageView');
  }
};

// Fonction pour tracker les événements
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  }
};

// Fonction pour tracker les clics sur les boutons
export const trackButtonClick = (buttonName, buttonText, pageName) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_text: buttonText,
    page_name: pageName
  });
};

// Fonction pour tracker les soumissions de formulaire
export const trackFormSubmission = (formName, formData) => {
  trackEvent('form_submission', {
    form_name: formName,
    ...formData
  });
};

// Fonction pour tracker les clics WhatsApp
export const trackWhatsAppClick = (phoneNumber) => {
  trackEvent('whatsapp_click', {
    phone_number: phoneNumber
  });
};

// Fonction pour tracker les clics sur les services
export const trackServiceClick = (serviceName) => {
  trackEvent('service_click', {
    service_name: serviceName
  });
};

// Fonction pour tracker les clics sur les secteurs
export const trackSectorClick = (sectorName) => {
  trackEvent('sector_click', {
    sector_name: sectorName
  });
};

// Fonction pour tracker les conversions
export const trackConversion = (conversionType, value = 0, currency = 'USD') => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: currency
  });
};

// Fonction pour tracker les scrolls
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth
  });
};

// Fonction pour tracker le temps passé sur la page
export const trackTimeOnPage = (timeSpent) => {
  trackEvent('time_on_page', {
    time_spent: timeSpent
  });
};

// Fonction pour tracker les interactions avec les services
export const trackServiceInteraction = (serviceName, interactionType) => {
  trackEvent('service_interaction', {
    service_name: serviceName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les secteurs
export const trackSectorInteraction = (sectorName, interactionType) => {
  trackEvent('sector_interaction', {
    sector_name: sectorName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les téléchargements
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType
  });
};

// Fonction pour tracker les partages sociaux
export const trackSocialShare = (platform, content) => {
  trackEvent('social_share', {
    platform: platform,
    content: content
  });
};

// Fonction pour tracker les erreurs
export const trackError = (errorMessage, errorType) => {
  trackEvent('error', {
    error_message: errorMessage,
    error_type: errorType
  });
};

// Fonction pour tracker les performances
export const trackPerformance = (metricName, value) => {
  trackEvent('performance_metric', {
    metric_name: metricName,
    value: value
  });
};

// Fonction pour tracker les interactions vidéo
export const trackVideoInteraction = (videoName, interactionType, progress = 0) => {
  trackEvent('video_interaction', {
    video_name: videoName,
    interaction_type: interactionType,
    progress: progress
  });
};

// Fonction pour tracker les interactions avec les images
export const trackImageInteraction = (imageName, interactionType) => {
  trackEvent('image_interaction', {
    image_name: imageName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les liens
export const trackLinkClick = (linkName, linkUrl) => {
  trackEvent('link_click', {
    link_name: linkName,
    link_url: linkUrl
  });
};

// Fonction pour tracker les interactions avec les formulaires
export const trackFormInteraction = (formName, interactionType, fieldName = null) => {
  const data = {
    form_name: formName,
    interaction_type: interactionType
  };
  
  if (fieldName) {
    data.field_name = fieldName;
  }
  
  trackEvent('form_interaction', data);
};

// Fonction pour tracker les abandons de formulaire
export const trackFormAbandon = (formName, lastField) => {
  trackEvent('form_abandon', {
    form_name: formName,
    last_field: lastField
  });
};

// Fonction pour tracker les retours utilisateur
export const trackUserFeedback = (feedbackType, rating, comment = null) => {
  const data = {
    feedback_type: feedbackType,
    rating: rating
  };
  
  if (comment) {
    data.comment = comment;
  }
  
  trackEvent('user_feedback', data);
};

// Fonction pour tracker les interactions avec le chat
export const trackChatInteraction = (interactionType, message = null) => {
  const data = {
    interaction_type: interactionType
  };
  
  if (message) {
    data.message = message;
  }
  
  trackEvent('chat_interaction', data);
};

// Fonction pour tracker les interactions avec les popups
export const trackPopupInteraction = (popupName, interactionType) => {
  trackEvent('popup_interaction', {
    popup_name: popupName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les notifications
export const trackNotificationInteraction = (notificationType, interactionType) => {
  trackEvent('notification_interaction', {
    notification_type: notificationType,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les emails
export const trackEmailInteraction = (emailType, interactionType) => {
  trackEvent('email_interaction', {
    email_type: emailType,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les SMS
export const trackSMSInteraction = (smsType, interactionType) => {
  trackEvent('sms_interaction', {
    sms_type: smsType,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les appels
export const trackCallInteraction = (callType, interactionType) => {
  trackEvent('call_interaction', {
    call_type: callType,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les réseaux sociaux
export const trackSocialInteraction = (platform, interactionType) => {
  trackEvent('social_interaction', {
    platform: platform,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les publicités
export const trackAdInteraction = (adName, interactionType) => {
  trackEvent('ad_interaction', {
    ad_name: adName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les campagnes
export const trackCampaignInteraction = (campaignName, interactionType) => {
  trackEvent('campaign_interaction', {
    campaign_name: campaignName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les partenariats
export const trackPartnershipInteraction = (partnerName, interactionType) => {
  trackEvent('partnership_interaction', {
    partner_name: partnerName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les affiliations
export const trackAffiliateInteraction = (affiliateName, interactionType) => {
  trackEvent('affiliate_interaction', {
    affiliate_name: affiliateName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les parrainages
export const trackReferralInteraction = (referrerName, interactionType) => {
  trackEvent('referral_interaction', {
    referrer_name: referrerName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les promotions
export const trackPromotionInteraction = (promotionName, interactionType) => {
  trackEvent('promotion_interaction', {
    promotion_name: promotionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les réductions
export const trackDiscountInteraction = (discountName, interactionType) => {
  trackEvent('discount_interaction', {
    discount_name: discountName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les cadeaux
export const trackGiftInteraction = (giftName, interactionType) => {
  trackEvent('gift_interaction', {
    gift_name: giftName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les concours
export const trackContestInteraction = (contestName, interactionType) => {
  trackEvent('contest_interaction', {
    contest_name: contestName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les sondages
export const trackSurveyInteraction = (surveyName, interactionType) => {
  trackEvent('survey_interaction', {
    survey_name: surveyName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les quiz
export const trackQuizInteraction = (quizName, interactionType) => {
  trackEvent('quiz_interaction', {
    quiz_name: quizName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les jeux
export const trackGameInteraction = (gameName, interactionType) => {
  trackEvent('game_interaction', {
    game_name: gameName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les applications
export const trackAppInteraction = (appName, interactionType) => {
  trackEvent('app_interaction', {
    app_name: appName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les sites web
export const trackWebsiteInteraction = (websiteName, interactionType) => {
  trackEvent('website_interaction', {
    website_name: websiteName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les blogs
export const trackBlogInteraction = (blogName, interactionType) => {
  trackEvent('blog_interaction', {
    blog_name: blogName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les forums
export const trackForumInteraction = (forumName, interactionType) => {
  trackEvent('forum_interaction', {
    forum_name: forumName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les wikis
export const trackWikiInteraction = (wikiName, interactionType) => {
  trackEvent('wiki_interaction', {
    wiki_name: wikiName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les FAQs
export const trackFAQInteraction = (faqName, interactionType) => {
  trackEvent('faq_interaction', {
    faq_name: faqName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les tutoriels
export const trackTutorialInteraction = (tutorialName, interactionType) => {
  trackEvent('tutorial_interaction', {
    tutorial_name: tutorialName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les guides
export const trackGuideInteraction = (guideName, interactionType) => {
  trackEvent('guide_interaction', {
    guide_name: guideName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les manuels
export const trackManualInteraction = (manualName, interactionType) => {
  trackEvent('manual_interaction', {
    manual_name: manualName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les documentations
export const trackDocumentationInteraction = (documentationName, interactionType) => {
  trackEvent('documentation_interaction', {
    documentation_name: documentationName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les API
export const trackAPIInteraction = (apiName, interactionType) => {
  trackEvent('api_interaction', {
    api_name: apiName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les SDK
export const trackSDKInteraction = (sdkName, interactionType) => {
  trackEvent('sdk_interaction', {
    sdk_name: sdkName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les plugins
export const trackPluginInteraction = (pluginName, interactionType) => {
  trackEvent('plugin_interaction', {
    plugin_name: pluginName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les extensions
export const trackExtensionInteraction = (extensionName, interactionType) => {
  trackEvent('extension_interaction', {
    extension_name: extensionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les thèmes
export const trackThemeInteraction = (themeName, interactionType) => {
  trackEvent('theme_interaction', {
    theme_name: themeName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les templates
export const trackTemplateInteraction = (templateName, interactionType) => {
  trackEvent('template_interaction', {
    template_name: templateName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les widgets
export const trackWidgetInteraction = (widgetName, interactionType) => {
  trackEvent('widget_interaction', {
    widget_name: widgetName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les modules
export const trackModuleInteraction = (moduleName, interactionType) => {
  trackEvent('module_interaction', {
    module_name: moduleName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les composants
export const trackComponentInteraction = (componentName, interactionType) => {
  trackEvent('component_interaction', {
    component_name: componentName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les éléments
export const trackElementInteraction = (elementName, interactionType) => {
  trackEvent('element_interaction', {
    element_name: elementName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les attributs
export const trackAttributeInteraction = (attributeName, interactionType) => {
  trackEvent('attribute_interaction', {
    attribute_name: attributeName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les styles
export const trackStyleInteraction = (styleName, interactionType) => {
  trackEvent('style_interaction', {
    style_name: styleName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les scripts
export const trackScriptInteraction = (scriptName, interactionType) => {
  trackEvent('script_interaction', {
    script_name: scriptName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les fichiers
export const trackFileInteraction = (fileName, interactionType) => {
  trackEvent('file_interaction', {
    file_name: fileName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les dossiers
export const trackFolderInteraction = (folderName, interactionType) => {
  trackEvent('folder_interaction', {
    folder_name: folderName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les répertoires
export const trackDirectoryInteraction = (directoryName, interactionType) => {
  trackEvent('directory_interaction', {
    directory_name: directoryName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les chemins
export const trackPathInteraction = (pathName, interactionType) => {
  trackEvent('path_interaction', {
    path_name: pathName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les URLs
export const trackURLInteraction = (urlName, interactionType) => {
  trackEvent('url_interaction', {
    url_name: urlName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les domaines
export const trackDomainInteraction = (domainName, interactionType) => {
  trackEvent('domain_interaction', {
    domain_name: domainName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les sous-domaines
export const trackSubdomainInteraction = (subdomainName, interactionType) => {
  trackEvent('subdomain_interaction', {
    subdomain_name: subdomainName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les protocoles
export const trackProtocolInteraction = (protocolName, interactionType) => {
  trackEvent('protocol_interaction', {
    protocol_name: protocolName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les ports
export const trackPortInteraction = (portName, interactionType) => {
  trackEvent('port_interaction', {
    port_name: portName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les paramètres
export const trackParameterInteraction = (parameterName, interactionType) => {
  trackEvent('parameter_interaction', {
    parameter_name: parameterName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les requêtes
export const trackQueryInteraction = (queryName, interactionType) => {
  trackEvent('query_interaction', {
    query_name: queryName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les fragments
export const trackFragmentInteraction = (fragmentName, interactionType) => {
  trackEvent('fragment_interaction', {
    fragment_name: fragmentName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les ancres
export const trackAnchorInteraction = (anchorName, interactionType) => {
  trackEvent('anchor_interaction', {
    anchor_name: anchorName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les hashtags
export const trackHashtagInteraction = (hashtagName, interactionType) => {
  trackEvent('hashtag_interaction', {
    hashtag_name: hashtagName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les mentions
export const trackMentionInteraction = (mentionName, interactionType) => {
  trackEvent('mention_interaction', {
    mention_name: mentionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les tags
export const trackTagInteraction = (tagName, interactionType) => {
  trackEvent('tag_interaction', {
    tag_name: tagName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les catégories
export const trackCategoryInteraction = (categoryName, interactionType) => {
  trackEvent('category_interaction', {
    category_name: categoryName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les labels
export const trackLabelInteraction = (labelName, interactionType) => {
  trackEvent('label_interaction', {
    label_name: labelName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les valeurs
export const trackValueInteraction = (valueName, interactionType) => {
  trackEvent('value_interaction', {
    value_name: valueName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les actions
export const trackActionInteraction = (actionName, interactionType) => {
  trackEvent('action_interaction', {
    action_name: actionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les événements
export const trackEventInteraction = (eventName, interactionType) => {
  trackEvent('event_interaction', {
    event_name: eventName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les sessions
export const trackSessionInteraction = (sessionName, interactionType) => {
  trackEvent('session_interaction', {
    session_name: sessionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les utilisateurs
export const trackUserInteraction = (userName, interactionType) => {
  trackEvent('user_interaction', {
    user_name: userName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les clients
export const trackClientInteraction = (clientName, interactionType) => {
  trackEvent('client_interaction', {
    client_name: clientName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les prospects
export const trackProspectInteraction = (prospectName, interactionType) => {
  trackEvent('prospect_interaction', {
    prospect_name: prospectName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les leads
export const trackLeadInteraction = (leadName, interactionType) => {
  trackEvent('lead_interaction', {
    lead_name: leadName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les conversions
export const trackConversionInteraction = (conversionName, interactionType) => {
  trackEvent('conversion_interaction', {
    conversion_name: conversionName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les ventes
export const trackSaleInteraction = (saleName, interactionType) => {
  trackEvent('sale_interaction', {
    sale_name: saleName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les revenus
export const trackRevenueInteraction = (revenueName, interactionType) => {
  trackEvent('revenue_interaction', {
    revenue_name: revenueName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les profits
export const trackProfitInteraction = (profitName, interactionType) => {
  trackEvent('profit_interaction', {
    profit_name: profitName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les pertes
export const trackLossInteraction = (lossName, interactionType) => {
  trackEvent('loss_interaction', {
    loss_name: lossName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les investissements
export const trackInvestmentInteraction = (investmentName, interactionType) => {
  trackEvent('investment_interaction', {
    investment_name: investmentName,
    interaction_type: interactionType
  });
};

// Fonction pour tracker les interactions avec les dépenses
export const trackExpenseInteraction = (expenseName, interactionType) => {
  trackEvent('expense_interaction', {
    expense_name: expenseName,
    interaction_type: interaction
