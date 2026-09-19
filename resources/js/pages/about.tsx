import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function About() {
    return (
        <>
            <Head title="About" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    
                    {/* first box */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex items-center justify-center">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                        <img src="https://accabuyog.com/home/wp-content/uploads/2023/02/ACC-logo-1-5-1536x1536.png" alt="acc logo"
                        className='rounded-full w-full max-w-[200px] aspect-square object-cover'
                        />
                    </div>

                    {/* 2nd box */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex items-center justify-center">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                        <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/transparency-seal-160x160.png" alt="pangaduha logo"
                        className='rounded-full w-full max-w-[200px] aspect-square object-cover'
                        />
                    </div>
                    
                    {/* 3rd box */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex items-center justify-center">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                        <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/foi-logo-160x160.png" alt="ikatulo logo"
                        className='rounded-full w-full max-w-[223px] aspect-square object-cover'
                        />
                    </div>

                    
                {/* big ahh box below */}
                </div>
                <div className="relative aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border ">
                    <PlaceholderPattern className="absolute inset-0 size-full  " />
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    
                    {/* first box */}
                    <div className="relative aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex items-center justify-center">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                        
                        <div className="Space-y-6 px-5">
                            {/* title */}
                            
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">
                                        ACC Official Seal
                                </h2>
                            {/* intro  */}
                            <div className="space-y-4 text-sm leading-7 text-justify text-muted-foreground">
                                <p>Since Its Founding on 1979, <strong> ABUYOG COMMUNITY COLLEGE</strong> has striven to provide students the knowledge, values, skills, and COMMUNITY involvement to enable them to excel as the forefront manpower of COMMUNITY and of the global arena. ACC aims for the creation of a scholastic environment composed of individuals that are grounded in faith, integrity, respect and trust.</p>
                                <p>With today’s fast-paced global progress, ACC promotes and fosters the acquisition of attributes that will empower students to triumph against ignorance and mediocrity and contribute positively to nation building.</p>
                            </div>
                            <br />
                             <div className="space-y-4">
                                 <h3 className="text-x1 font-semibold">
                                  The School LOGO:
                                 </h3>

                            </div>
                             
                         <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">Laurel Wreath</strong>  (Green) – a symbol of victory and honor. It symbolizes ACC’s triumph against ignorance and success in the search for truth and knowledge.

                            </li>
                            <li>
                                <strong className="text-foreground"> Torch</strong> – an emblem of enlightenment and hope. It symbolizes the vision of ACC to provide light as a source of enlightenment to all students.
                            </li>
                            <li>
                                <strong className="text-foreground">Scrolls</strong>  – an emblem of wisdom. It symbolizes translating academic work into meaningful presentations of expertise and scholarly work.
                            </li>
                            <li>
                                <strong className="text-foreground">Quill Pen and Ink</strong> – an instrument for writing which symbolizes freedom and independence to soar and be able to look at things from a wider perspective.
                            </li>
                            <li>
                                <strong className="text-foreground">Bee</strong> – symbol for the Municipality of Abuyog, and;

                            </li>
                            <li>
                                <strong className="text-foreground">1979</strong> the year the college was established.

                            </li>
                         </ul>

                            </div>

                        </div>

                    </div>

                    {/* 2nd box */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex items-center justify-center">
                        <PlaceholderPattern className="absolute inset-0 size-full " />

                     <iframe
                     className="absolute inset=0 w-full h-full z10" 
                     src="https://www.youtube.com/embed/_dHiZW9oDdw" frameBorder="0" 
                     title="acc vid"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                     >
                     </iframe>


                    </div>
                    </div>

                </div>
            </div>
        </>
    );
}

About.layout = {
    breadcrumbs: [{ title: 'About', href: '/about' }],
};
