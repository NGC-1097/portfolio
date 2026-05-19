<script setup lang="ts">
// Contact page — built but not linked in nav until activated
useHead({ title: 'Contact — Robert Lazar' })
</script>

<template>
  <div class="container py-16 max-w-xl">
    <div class="mb-12">
      <p class="label mb-3">Contact</p>
      <h1 class="font-mono text-3xl font-medium tracking-tight">Get in touch</h1>
    </div>

    <p class="text-muted-foreground leading-relaxed mb-8">
      Available for internships, collaborations, and design conversations.
      Drop a message and I'll get back to you.
    </p>

    <form class="space-y-6">
      <div>
        <label class="label block mb-2">Name</label>
        <input
          type="text"
          class="w-full bg-background border border-input rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
        />
      </div>
      <div>
        <label class="label block mb-2">Email</label>
        <input
          type="email"
          class="w-full bg-background border border-input rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label class="label block mb-2">Message</label>
        <textarea
          rows="5"
          class="w-full bg-background border border-input rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        class="font-mono text-sm font-medium bg-primary text-primary-foreground px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
      >
        Send
      </button>
    </form>
  </div>
</template>
