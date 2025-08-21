export const CollectUniqueGroups = (systemGroup) => {
  const out: { id: string; name: string }[] = [];
  const seen = new Set<string>();

  for (const sys of systemGroup.systems ?? []) {
    const groups = Array.isArray(sys.groups) ? sys.groups : [];
  
    if (groups.length === 0) {
      if (sys.id && !seen.has(sys.id)) {
        seen.add(sys.id);
        out.push({ id: sys.id, name: sys.name ?? sys.id });
      }
      continue;
    }
  
    for (const g of groups) {
      if (!g?.id || seen.has(g.id)) continue;
    seen.add(g.id);
        out.push({ id: g.id, name: g.name ?? g.id });
    }
  }

   return out;
}

