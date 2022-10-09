import path from 'path';

export const srcDir = path.join(__dirname, '..', 'src');
export const distDir = path.join(__dirname, '..', 'dist');
export const log = (msg) => {
  // https://telepathy.freedesktop.org/doc/telepathy-glib/telepathy-glib-debug-ansi.html
  const GREEN = '\x1b[32m';
  const GREEN_OFF = '\x1b[0m';
  const BOLD = '\x1b[1m';
  const BOLD_OFF = '\x1b[22m';
  const color = `${GREEN}${BOLD}%s${BOLD_OFF}${GREEN_OFF}`;
  console.log(color, `[build]: ${msg}`);
};
