import { Cup } from "@/components/graphics";

type ShotProps = {
  src?: string;
  alt: string;
  /** Nama file yang diharapkan, mis. "foto/sanga.jpg". Ditampilkan di placeholder. */
  hint: string;
  /** CSS aspect-ratio, mis. "4 / 5". Diabaikan kalau `fill`. */
  ratio?: string;
  /** Isi penuh elemen induk yang sudah punya posisi + tinggi. */
  fill?: boolean;
  /** Warna cangkir untuk gambar placeholder. */
  glaze?: string;
  dip?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
};

/**
 * Menampilkan <img> kalau `src` diisi, kalau belum menampilkan kotak
 * placeholder rapi dengan sketsa cangkir dan nama file yang harus ditaruh.
 */
export function Shot({
  src,
  alt,
  hint,
  ratio = "4 / 5",
  fill = false,
  glaze = "#b9b2a2",
  dip = "#8f887a",
  className = "",
  imgClassName = "",
  eager = false,
}: ShotProps) {
  const box = fill
    ? `absolute inset-0 overflow-hidden bg-paper-raised ${className}`
    : `relative overflow-hidden bg-paper-raised ${className}`;

  return (
    <div className={box} style={fill ? undefined : { aspectRatio: ratio }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-ink/25 p-6 text-center">
          <Cup glaze={glaze} dip={dip} className="w-1/3 max-w-[8rem] opacity-70" />
          <p className="ui text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
            Foto menyusul
          </p>
          <p className="ui rounded bg-ink/5 px-2 py-1 text-[0.72rem] text-ink-soft">
            {hint}
          </p>
        </div>
      )}
    </div>
  );
}
