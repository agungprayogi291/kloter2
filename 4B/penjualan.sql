-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Feb 2021 pada 17.07
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `penjualan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cycle`
--

CREATE TABLE `cycle` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `stock` varchar(15) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_merk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cycle`
--

INSERT INTO `cycle` (`id`, `nama`, `price`, `stock`, `image`, `id_merk`) VALUES
(2, 'speda', '17000000', '10', 'brompton.jpg', 1),
(3, 'Montain', '30000000', '9', 'montain.jpg', 2),
(4, 'Lipta Totan', '15000000', '5', 'liptatita.jpg', 3),
(5, 'S Lipta', '13000000', '2', 'slipta', 4),
(6, 'Fixie', '3850000', '2', 'fixie.jpg', 5),
(7, 'FIxie Gear', '4855000', '9', 'fixiegear.jpg', 6),
(8, 'Road', '10000000', '5', 'road.jpg', 7),
(9, 'BMX', '5000000', '20', 'bmx.jpg', 8),
(10, 'wincycle', '1200000', '200', 'wincycle.jpg', 9),
(11, 'binomo', '1200000', '200', 'binomo.jpg', 10);

-- --------------------------------------------------------

--
-- Struktur dari tabel `merk`
--

CREATE TABLE `merk` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `merk`
--

INSERT INTO `merk` (`id`, `nama`) VALUES
(1, 'speda'),
(2, 'speda'),
(3, 'speda'),
(4, 'speda'),
(5, 'speda'),
(6, 'speda'),
(7, 'speda'),
(8, 'speda'),
(9, 'wincycle'),
(10, 'binomo');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'agung', 'agungprayogi291@gmailcom', 'agung29102002');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cycle`
--
ALTER TABLE `cycle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_merk` (`id_merk`);

--
-- Indeks untuk tabel `merk`
--
ALTER TABLE `merk`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cycle`
--
ALTER TABLE `cycle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `merk`
--
ALTER TABLE `merk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cycle`
--
ALTER TABLE `cycle`
  ADD CONSTRAINT `cycle_ibfk_1` FOREIGN KEY (`id_merk`) REFERENCES `merk` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
