const highlights = [
  {
    title: 'GoPro ride clips',
    text: 'Relive the feeling of each ride with short, personal video highlights and favorite moments.',
  },
  {
    title: 'Mapped routes',
    text: 'Keep track of where you rode, where you stopped, and which paths you want to revisit.',
  },
  {
    title: 'Personal ride notes',
    text: 'Capture the mood, distance, weather, and little details that make every ride memorable.',
  },
]

const services = [
  'A personal space for bike rides, GoPro footage, and route memories',
  'Simple, easy-to-follow maps for each ride you want to remember',
  'A calm, modern layout that feels more like a ride journal than a generic site',
]

export default function Home() {
  return (
    <div className="w-full">
      <section className="overflow-hidden rounded-3xl border border-base-300 bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 p-8 shadow-2xl md:p-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            thedesmoinescyclist.bike
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            My personal bike rides, captured with GoPro and mapped for later.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-base-content/80">
            This is a simple place to keep track of rides, save the routes, and share the best moments from the road in a more personal way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://thedesmoinescyclist.bike"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View the ride page
            </a>
            <a href="mailto:hello@thedesmoinescyclist.bike" className="btn btn-outline">
              Share a ride idea
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-base-300 bg-base-200/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-base-content/70">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 rounded-3xl border border-base-300 bg-base-100/80 p-8 shadow-lg md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            What this is for
          </p>
          <h2 className="mt-3 text-3xl font-semibold">A personal home for rides that are worth remembering.</h2>
          <ul className="mt-6 space-y-3 text-base-content/80">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-base-200 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Ride focus</p>
          <p className="mt-4 text-2xl font-semibold">
            A place to keep the adventure alive long after the ride is over.
          </p>
          <p className="mt-4 text-sm text-base-content/70">
            Whether it is a scenic loop, a weekend ride, or a favorite route captured on a GoPro, this experience is built to feel personal and easy to revisit.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl bg-primary px-8 py-10 text-center text-primary-content shadow-xl md:px-12">
        <h2 className="text-3xl font-semibold">Ready to relive a ride?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/90">
          Open the site to see the ride-centered experience built around GoPro footage, maps, and personal cycling memories.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://thedesmoinescyclist.bike" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Open the ride page
          </a>
        </div>
      </section>
    </div>
  )
}
