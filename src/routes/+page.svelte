<script>
    import { profile, projects } from '$lib/data.js';
    import { Code, Briefcase, X, ArrowSquareOut, Student, EnvelopeSimple, DeviceMobile, MapPinArea, GithubLogo } from 'phosphor-svelte';

    /** @type {typeof projects[0] | null} */
    let selectedProject = null;
</script>

<svelte:head>
    <title>{profile.name} - Portfolio</title>
</svelte:head>

<main class="min-h-screen p-4 md:p-8 max-w-6xl mx-auto font-sans text-slate-800">
    
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        <div class="lg:col-span-2 bg-[var(--color-ocean)] text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition duration-500">
                <Code size={140} weight="bold" />
            </div>
            
            <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{profile.name}</h1>
                <p class="text-xl text-white/90 font-medium">{profile.title}</p>
                <p class="mt-6 leading-relaxed text-white/80 max-w-xl text-lg">{profile.about}</p>
            </div>

            <div class="flex flex-wrap gap-3 mt-8 relative z-10">
                {#each profile.socials as social}
                <a href={social.url} target="_blank" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition backdrop-blur-sm border border-white/10 font-medium">
                    <svelte:component this={social.icon} size={20} weight="fill" /> 
                    {social.name}
                </a>
                {/each}

                <a href="mailto:{profile.contact.email}" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition backdrop-blur-sm border border-white/10 font-medium">
                    <EnvelopeSimple size={20} weight="fill" /> 
                </a>

                <a href="https://wa.me/{profile.contact.phone.replace(/^0/, '62').replace(/\s+/g, '')}" target="_blank" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition backdrop-blur-sm border border-white/10 font-medium">
                    <DeviceMobile size={20} weight="fill" /> 
                </a>

                <a href="https://maps.google.com/?q={encodeURIComponent(profile.contact.location)}" target="_blank" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition backdrop-blur-sm border border-white/10 font-medium">
                    <MapPinArea size={20} weight="fill" /> 
                </a>
            </div>
        </div>

        <div class="bg-[var(--color-ocean)]/10 p-6 rounded-3xl shadow-sm h-full">
            <h2 class="font-bold text-[var(--color-ocean)] mb-4 flex items-center gap-2">
               Keahlian
            </h2>
            <div class="flex flex-wrap gap-2 content-start">
                {#each profile.skills as skill}
                <span class="bg-white text-[var(--color-ocean)] px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm border border-[var(--color-ocean)]/10">
                    {skill}
                </span>
                {/each}
            </div>
        </div>

        <div class="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-[var(--color-ocean)] h-[400px] overflow-y-auto lg:overflow-visible">
            <h2 class="font-bold text-[var(--color-ocean)] mb-6 flex items-center gap-3 text-xl">
                <Briefcase size={28} weight="duotone" /> Pengalaman 
            </h2>
            <div class="grid grid-cols-1 gap-6">
                {#each profile.experience as exp}
                <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start group hover:bg-gray-50 p-4 rounded-2xl transition">
                    <div class="bg-[var(--color-ocean)]/10 p-3 rounded-xl text-[var(--color-ocean)] shrink-0">
                        <Briefcase size={24} weight="fill"/>
                    </div>
                    <div>
                        <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
                            <h3 class="font-bold text-lg text-gray-800">{exp.role}</h3>
                            <span class="hidden md:inline text-gray-300">•</span>
                            <span class="text-sm font-bold text-[var(--color-ocean)] uppercase tracking-wide">{exp.company}</span>
                        </div>
                        <p class="text-xs font-medium text-gray-400 mb-3 bg-gray-100 inline-block px-2 py-1 rounded">{exp.year}</p>
                        <ul class="list-disc list-outside ml-5 mt-2 space-y-1">
                            {#each exp.desc as point}
                                <li class="text-sm text-gray-600 leading-relaxed">{point}</li>
                            {/each}
                        </ul>            
                    </div>
                </div>
                {/each}
            </div>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-[var(--color-ocean)] h-[400px]">
            <h2 class="font-bold text-[var(--color-ocean)] mb-6 flex items-center gap-3 text-xl">
                <Student size={28} weight="duotone" /> Pendidikan
            </h2>
            <div class="space-y-8">
                {#each profile.education as edu}
                <div class="relative pl-6 border-l-2 border-[var(--color-ocean)]/20">
                    <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-ocean)] ring-4 ring-white"></div>
                    <h3 class="font-bold text-gray-900 leading-tight mb-1">{edu.school}</h3>
                    <p class="text-xs font-bold text-[var(--color-ocean)] uppercase mb-1">{edu.degree}</p>
                    <p class="text-xs text-gray-400 mb-2">{edu.year}</p>
                    <div class="inline-block bg-[var(--color-ocean)] text-white text-xs px-2 py-0.5 rounded font-bold mb-2">
                        {edu.meta}
                    </div>
                    {#if edu.desc}
                    <p class="text-xs text-gray-500 leading-relaxed mt-1">{edu.desc}</p>
                    {/if}
                </div>
                {/each}
            </div>
        </div>

        <div class="lg:col-span-3 mt-0">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-[var(--color-ocean)] flex items-center gap-2">
                    Proyek Unggulan
                </h2>
                <div class="h-1 flex-grow bg-[var(--color-ocean)]/10 ml-4 rounded-full"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each projects as project}
                <button 
                    on:click={() => selectedProject = project}
                    class="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left group h-full flex flex-col overflow-hidden ring-1 ring-gray-100"
                >
                    <div class="w-full h-48 overflow-hidden relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        <div class="absolute bottom-3 left-3">
                             <span class="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="font-bold text-lg text-gray-800 group-hover:text-[var(--color-ocean)] mb-2 line-clamp-1">
                            {project.title}
                        </h3>
                        <p class="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed flex-grow">
                            {project.desc}
                        </p>
                        <div class="pt-4 border-t border-gray-100 flex items-center justify-end mt-auto">
                            <div class="text-xs font-bold text-[var(--color-ocean)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Detail <ArrowSquareOut size={14} weight="bold" />
                            </div>
                        </div>
                    </div>
                </button>
                {/each}
            </div>
        </div>
    </div>

    <footer class="text-center mt-16 mb-8 text-gray-400 text-sm font-medium">
        &copy; 2025 {profile.name} • Built with SvelteKit
    </footer>
</main>

{#if selectedProject}
<div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" 
    on:click={() => selectedProject = null}
>
    <div 
        class="bg-white rounded-3xl max-w-3xl w-full shadow-2xl transform transition-all scale-100 max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden" 
        on:click|stopPropagation
    >
        <div class="md:w-2/5 h-48 md:h-auto relative bg-gray-100">
            <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[var(--color-ocean)]/20"></div>
        </div>

        <div class="md:w-3/5 p-8 flex flex-col relative">
            <button 
                on:click={() => selectedProject = null} 
                class="absolute top-4 right-4 bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 transition z-10"
            >
                <X size={20} weight="bold" />
            </button>

            <div class="mb-6 mt-2">
                <span class="text-xs font-bold text-[var(--color-ocean)] uppercase tracking-wider mb-2 block">
                    {selectedProject.category}
                </span>
                <h2 class="text-3xl font-bold text-gray-900 leading-tight">{selectedProject.title}</h2>
            </div>
            
            <div class="space-y-6 flex-grow overflow-y-auto pr-2">
                <div>
                    <h3 class="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                        <span class="w-1 h-4 bg-[var(--color-ocean)] rounded-full"></span> TENTANG PROYEK
                    </h3>
                    <p class="text-gray-600 leading-relaxed text-sm">{selectedProject.fullDesc}</p>
                </div>
                
                <div>
                    <h3 class="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                        <span class="w-1 h-4 bg-[var(--color-ocean)] rounded-full"></span> TECH STACK
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        {#each selectedProject.stack as tech}
                        <span class="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold bg-gray-50">
                            {tech}
                        </span>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="mt-8 flex gap-3">
                {#if selectedProject.repo}
                <a 
                    href={selectedProject.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg"
                >
                    <GithubLogo size={20} weight="fill" /> Lihat Projek
                </a>
                {/if}

                <button 
                    on:click={() => selectedProject = null} 
                    class="flex-1 bg-[var(--color-ocean)] text-white py-3 rounded-xl font-bold hover:brightness-110 transition shadow-lg shadow-[var(--color-ocean)]/20 cursor-pointer"
                >
                    Tutup
                </button>
            </div>
        </div>
    </div>
</div>
{/if}