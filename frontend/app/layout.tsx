import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'FieldIn',description:'Play closer. Live better.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
