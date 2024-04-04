export default [
    {
        name: 'NAV_PRODUCTS',
        children: [
            {
                name: 'NAV_SOLUTIONS',
                to: 'https://bosta.co/en-eg/solutions',
            },
            {
                name: 'NAV_DASHBOARD',
                to: 'https://bosta.co/en-eg/dashboard',
            },
            {
                name: 'NAV_MOBILE',
                to: 'https://bosta.co/en-eg/mobile',
            }
        ],
    }, {
        name: 'NAV_INTEGRATIONS',
        children: [
            {
                name: 'NAV_SHOPIFY',
                to: 'https://bosta.co/en-eg/merged-integrations/shopify',
            },
            {
                name: 'NAV_WOOCOMMERCE',
                to: 'https://bosta.co/en-eg/merged-integrations/woocommerce',
            },
            {
                name: 'NAV_CUSTOMAPI',
                to: 'https://bosta.co/en-eg/merged-integrations/custom-api',
            }
        ],
    },
    {
        name: 'NAV_USECASES',
        children: [
            {
                name: 'NAV_BUSINESS',
                to: 'https://bosta.co/en-eg/business',
            },
            {
                name: 'NAV_SMES',
                to: 'https://bosta.co/en-eg/smes',
            }
        ],
    },
    {
        name: 'NAV_PRICING',
        to: 'https://bosta.co/en-eg/pricing',
        children: [],
    },
    {
        name: 'NAV_RESOURCES',
        children: [
            {
                name: 'NAV_BLOG',
                to: 'https://bosta.co/en-eg/blog',
            },
            {
                name: 'NAV_INSIGHTS',
                to: 'https://bosta.co/en-eg/insights',
            }
        ],
    }
]