import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { landingpage } from '@/routes';

export default function Landingpage() {
    return (
        <>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <p>the Gae's</p>

                {/* first div */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                    {/* first box */}
                    <div className="flex justify-center items-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <h1>Acc Official Seal</h1>
                        <PlaceholderPattern className="absolute inset-0 size-full" />
                        <img src="https://accabuyog.com/home/wp-content/uploads/2023/02/ACC-logo-1-5-768x768.png" alt="Acc Logo"
                        className="rounded-full w-full max-w-[200px] aspect-square object-cover"
                        />
                    </div>

                    {/* second box */}
                    <div className="flex justify-center items-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        Bayot ken
                        <PlaceholderPattern className="absolute inset-0 size-full" />
                    </div>

                    {/* third box */}
                    <div className="flex justify-center items-center relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        Bayot jarheds
                        <PlaceholderPattern className="absolute inset-0 size-full" />
                    </div>
                </div>
                {/* end of first div */}

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full " />
                    
                </div>
            </div>
        </>
    );
}

Landingpage.layout = {
    breadcrumbs: [
        {
            title: 'Home',
            href: landingpage(),
        },
    ],
};
