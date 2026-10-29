export function AdsterraLeaderboard() {
  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : 'b5163e7a5720b92c6fe5966b31cfd246',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/b5163e7a5720b92c6fe5966b31cfd246/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 my-8 flex flex-col items-center">
      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
        Advertisement
      </div>
      <div className="w-full flex justify-center overflow-x-auto py-1">
        <iframe
          title="Adsterra 728x90 Banner"
          srcDoc={adHtml}
          width={728}
          height={90}
          scrolling="no"
          className="border-0 shadow-xs rounded-sm max-w-[728px] h-[90px] bg-slate-50"
        />
      </div>
    </div>
  );
}

export function AdsterraSkyscraper() {
  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : 'e48083742c89bfaffabb567b369b43c5',
            'format' : 'iframe',
            'height' : 300,
            'width' : 160,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/e48083742c89bfaffabb567b369b43c5/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
        Partner Ad
      </div>
      <iframe
        title="Adsterra 160x300 Banner"
        srcDoc={adHtml}
        width={160}
        height={300}
        scrolling="no"
        className="border-0 shadow-xs rounded-sm w-[160px] h-[300px] bg-slate-50"
      />
    </div>
  );
}

export function AdsterraWideSkyscraper() {
  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '54f8986531206e344e1477e259583117',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highrevenueformat.com/54f8986531206e344e1477e259583117/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
        Sponsored
      </div>
      <iframe
        title="Adsterra 160x600 Wide Skyscraper"
        srcDoc={adHtml}
        width={160}
        height={600}
        scrolling="no"
        className="border-0 shadow-xs rounded-sm w-[160px] h-[600px] bg-slate-50"
      />
    </div>
  );
}

export function AdsterraNativeBanner() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 my-10 flex flex-col items-center">
      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-2 font-medium">
        Sponsored Content
      </div>
      <div
        id="container-f1edc0cc935d523d1502b13fa8dd2e95"
        className="w-full min-h-[90px] flex justify-center items-center overflow-hidden bg-slate-50 border border-slate-200 rounded-xl p-2"
      />
    </div>
  );
}

export function AdsterraDirectLinkBanner() {
  const directLinkUrl = "https://www.profitableratecpmnetwork.com/n22prs8wj6?key=15ea0676313439a33ed4ea6bc27f4388";

  return (
    <div className="max-w-4xl mx-auto px-4 my-6 text-center">
      <a
        href={directLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 hover:text-blue-900 text-xs sm:text-sm font-semibold transition-all hover:shadow-xs"
      >
        <span>🎮 Play More Free Games & Online Puzzles</span>
        <span className="text-blue-500">→</span>
      </a>
    </div>
  );
}
