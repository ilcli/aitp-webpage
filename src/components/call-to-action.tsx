export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Quote/Image */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-3xl transform -rotate-2"></div>
            
            {/* Main content */}
            <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-start mb-6">
                <svg
                  className="w-8 h-8 text-white/80 mr-3 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <div>
                  <blockquote className="text-white text-xl font-medium leading-relaxed mb-4">
                    &ldquo;Let&rsquo;s build a smart system that actually saves time — not adds work.&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">AI</span>
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">AITP Agency</p>
                      <p className="text-white/70 text-sm">AI Systems That Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Stop wrestling with complex tools and start building systems that your team will actually use. 
              Book a free strategy call and let&rsquo;s discuss how AI can work for you.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <a
                href="#contact"
                className="btn bg-white text-primary-600 hover:bg-white/90 shadow-soft-lg inline-block w-full sm:w-auto text-center"
              >
                Book Free Strategy Call
              </a>
              <a
                href="#about"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 inline-block w-full sm:w-auto text-center"
              >
                Learn Our Process
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No obligations</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Custom solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}