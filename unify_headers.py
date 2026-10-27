import os
import glob
import re

unified_header = """  <header class="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-outline-variant/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand -->
      <a class="flex items-center gap-3 text-primary focus:outline-none" href="home.html">
        <img src="images/logo.png" alt="Apexify Software Solutions" class="h-10 w-auto object-contain">
      </a>
      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a class="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="services.html">Services</a>
        <a class="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="why-us.html">Why Us</a>
        <a class="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="our_work.html">Work</a>
        <a class="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="process.html">Process</a>
        <a class="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="solution.html">Architecture</a>
      </nav>
      <!-- CTAs -->
      <div class="flex items-center gap-3">
        <a class="hidden sm:inline-flex items-center justify-center rounded-lg h-10 px-4 bg-surface-container text-on-surface hover:bg-gray-100 hover:text-indigo-600 text-sm font-semibold border border-outline-variant/40 transition-colors" href="our_work.html">View Our Work</a>
        <a class="hidden md:inline-flex items-center gap-1.5 justify-center rounded-lg h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm font-semibold tracking-[0.015em]" href="contacts.html">
          <span>Start a Project</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
        <!-- Hamburger Button -->
        <button id="menu-button" aria-label="Open menu" aria-expanded="false" class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu Drawer (Hidden by default) -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-outline-variant/30 bg-surface px-4 py-4 space-y-1 shadow-lg shadow-black/5 relative z-50">
      <a class="block px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="services.html">Services</a>
      <a class="block px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="why-us.html">Why Us</a>
      <a class="block px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="our_work.html">Work</a>
      <a class="block px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="process.html">Process</a>
      <a class="block px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="solution.html">Architecture</a>
      <div class="pt-2 border-t border-outline-variant/30">
        <a class="block w-full text-center mt-2 px-4 py-2.5 rounded-lg bg-primary-container text-surface-container-lowest font-semibold text-sm transition-all hover:bg-primary" href="contacts.html">Start a Project</a>
      </div>
    </div>
  </header>"""

html_files = glob.glob('*.html')
for f in html_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace everything between <header> and </header>
        # Note: some files might have header with classes, so we match <header... to </header>
        updated_content = re.sub(r'(?s)<header.*?</header>', unified_header, content)
        
        if content != updated_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            print(f"Updated header in {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
