import { client } from "../lib/sanity";
import ProjectGrid from "../components/ProjectGrid";
import { groq } from "next-sanity";
import Link from "next/link";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{}>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const query = groq`
    *[_type == "project"] | order(_createdAt desc)[0...3] {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      year,
      description,
      images,
      category->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `;

  const latestProjects = await client.fetch(query);

  return (
    <main className="min-h-screen">
      {/* Hero Section with artwork background */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-[url('/falling_art_2.jpg')] bg-cover bg-center"
          style={{ backgroundPosition: "40% 65%" }}
        />
        <div className="absolute inset-0 bg-white/25" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-8 py-20 relative">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Manu Alastalo
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light">
              Kuvataiteilija & Suunnittelija
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Tervetuloa portfoliooni! Täältä löydät kokoelman töitäni, joissa
              yhdistyvät perinteiset ja digitaaliset tekniikat luoden
              ainutlaatuisia tarinoita.
            </p>
            <div className="pt-6">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Katso työt
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work with subtle background */}
      <section className="py-20 px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Viimeisimmät Työt
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tutustu uusimpiin projekteihin ja töihin
          </p>
          <ProjectGrid
            projects={latestProjects.map((project: any) => ({
              ...project,
              year: String(project.year || "N/A"),
              slug: {
                current: project.slug,
              },
            }))}
          />
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Katso Kaikki Työt
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with card design */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Minusta
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
              <p>
                Olen nuori taiteilija Suomesta, ja intohimoni on luoda taidetta,
                joka herättää tunteita ja kertoo tarinoita. Työskentelyssäni
                yhdistyvät perinteiset tekniikat ja moderni digitaalinen taide,
                mikä mahdollistaa monipuolisen ilmaisun.
              </p>
              <p>
                Inspiraationi kumpuaa luonnosta, arkipäivän hetkistä ja
                mielikuvituksesta. Jokainen teos on matka, jossa tutkin
                erilaisia teemoja ja tekniikoita. Pyrin luomaan töitä, jotka
                puhuttelevat katsojaa ja herättävät ajatuksia.
              </p>
              <p>
                Tällä hetkellä opiskelen taidealaa ja kehitän jatkuvasti
                osaamistani. Etsin uusia haasteita ja mahdollisuuksia toteuttaa
                luovia projekteja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with gradient background */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ota Yhteyttä
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Kiinnostuitko töistäni tai haluatko keskustella yhteistyöstä?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            Lähetä Viesti
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
