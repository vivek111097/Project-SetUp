import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="assets/img/favicon.png" rel="icon" />
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                    <link href="assets/css/variables.css" rel="stylesheet" />
                    <link href="assets/css/main.css" rel="stylesheet" />

                    <link rel="stylesheet" href="assets/css/global.css" />
                    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="assets/css/owl.theme.default.css" />

                    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css" />

                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                    <link rel="stylesheet" href="assets/css/mgfp.css" />
                    <link rel="stylesheet" href="assets/css/metlife-us.min.css" type="text/css" />
                    <link rel="stylesheet" href="assets/css/web-forms.css" type="text/css" />
                    <link rel="stylesheet" href="assets/css/master.css" />
                    <link rel="stylesheet" href="assets/css/dental-care.css" />
                    <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
                </Head>
                <body>

                    <Main />
                    <NextScript />


                    <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
                    <Script src="assets/vendor/aos/aos.js" />
                    <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
                    <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
                    <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
                    <Script src="assets/vendor/php-email-form/validate.js" />
                    <Script src="assets/js/main.js" />
                    <Script src="bower_components/aos/dist/aos.js"/>


                    <Script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
                    <Script type="text/javascript" src="assets/js/global.js"/>
                    <Script type="text/javascript" src="assets/js/metlife-us.min.js" defer/>
                    <Script type="text/javascript" src="assets/js/owl.carousel.min.js"/>

                    <Script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"/>
                    <Script type="text/javascript" src="assets/js/dental-master.js"/>
                    <Script src="https://maps.googleapis.com/maps/api/js" defer/>
                    <Script type="text/javascript" src="assets/js/homepage/homepage.js" defer/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
