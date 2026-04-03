'use client'

import { useEffect, useState } from 'react'

// World Cup 2026 Toronto opening match - June 12, 2026
const TARGET_DATE = new Date('2026-06-12T00:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-3">
      <Unit value={pad(timeLeft.days)} label="days" />
      <Sep />
      <Unit value={pad(timeLeft.hours)} label="hrs" />
      <Sep />
      <Unit value={pad(timeLeft.minutes)} label="min" />
    </div>
  )
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[3px]">
      <span className="text-[#f0c060] text-[42px] font-bold leading-none tabular-nums">{value}</span>
      <span className="text-white/40 text-[15px] font-normal">{label}</span>
    </div>
  )
}

function Sep() {
  return <span className="text-white/30 text-[36px] font-bold leading-none mb-4">:</span>
}
