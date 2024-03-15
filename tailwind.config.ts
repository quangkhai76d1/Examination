import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
        './src/common/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                main: '#00B9AE',
                white: '#FFFFFF',
                primary: '#F9F9F9',
                secondary: '#16181E',
                third: '#21242D'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                lato: ['Lato', 'sans-serif']
            },
            fontSize: {
                xs: ['12px', '16px'],
                sm: ['14px', '20px'],
                base: ['16px', '24px']
            },
            boxShadow: {
                primary:
                    'rgba(136, 165, 191, 0.48) 3px 1px 6px 0px, rgba(255, 255, 255, 0.8) -3px -1px 6px 0px'
            },
            maxHeight: {
                sidebar: 'calc(100vh - 96px)'
            },
            boxShadowColor: {
                header: '0px 14px 29px 27px rgba(255,255,255,0.1);'
            }
        }
    },
    plugins: []
}
export default config
