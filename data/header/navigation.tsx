import { HeaderType } from '../../components/Header/header';

const navigation:HeaderType = {
        'logo':{
            'url':'/images/coastal-clear-logo.png',
            'altText':''
        },
        primaryNav:[
            {
                'settings':{
                    'hasSubMenu': false,
                },
                'topLevelLink':{
                    'text': 'About',
                    'link': "/about",
                    'targetBlank': false,
                    'addCtaStyle': false
                },
            },
            {
                'settings':{
                    'hasSubMenu': true,
                },
                'topLevelLink':{
                    'text': 'Services',
                    'link': "/services",
                    'targetBlank': false,
                    'addCtaStyle': false
                },
                'subNav':{
                    'header': 'Services',
                    'dropdownItems': [
                        {
                            'text': 'All Services',
                            'link': "/services",
                            'targetBlank': false,
                        },
                        {
                            'text': 'Pool Heaters',
                            'link': "/services/pool-heater",
                            'targetBlank': false,
                        },
                        {
                            'text': 'Power Washing',
                            'link': "/services/power-washing",
                            'targetBlank': false,
                        },
                        {
                            'text': 'Pool Resurfacing',
                            'link': "/services/pool-resurfacing",
                            'targetBlank': false,
                        },
                        {
                            'text': 'Pool Renovations',
                            'link': "/services/pool-renovations",
                            'targetBlank': false,
                        },
                    ]
                }
            },
            {
                'settings':{
                    'hasSubMenu': false,
                },
                'topLevelLink':{
                    'text': 'FAQs',
                    'link': "/company/faqs",
                    'targetBlank': false,
                    'addCtaStyle': false
                },
            },
            {
                'settings':{
                    'hasSubMenu': false,
                },
                'topLevelLink':{
                    'text': 'Contact Us',
                    'link': "tel:123-456-7890",
                    'targetBlank': true,
                    'addCtaStyle': true
                },
            },

        ]
    };

export default navigation