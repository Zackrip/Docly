const SIMPLE_MESSAGE =
  /^(hi|hello|hey|thanks|thank you|good morning|good evening|bye)[!. ]*$/i;

const WRITING_OR_CODING_TASK =
  /\b(rewrite|rephrase|proofread|correct the grammar|translate|summarize this sentence|write code|debug|fix this code|explain this code)\b/i;

const FRESHNESS_CUES =
  /\b(latest|current|currently|today|yesterday|recent|recently|this week|this month|this year|right now|breaking news|up to date|as of now|2026)\b/i;

const EXPLICIT_WEB_CUES =
  /\b(search the web|search online|look it up|find sources|with sources|cite sources|current research|recent research|compare with current|verify online)\b/i;

const ENRICHMENT_CUES =
  /\b(explain further|go beyond the document|additional context|expand on this|compare with|verify whether|is this still accurate)\b/i;

export function routeQuery({
  question,
  documentSelected = false,
  enrichDocument = false,
}) {
  const q = question?.trim();

  if (!q) {
    throw new Error("Question cannot be empty.");
  }

  // Explicit requests for outside research take priority.
  if (EXPLICIT_WEB_CUES.test(q) || FRESHNESS_CUES.test(q)) {
    return documentSelected ? "document_web" : "web";
  }

  // Greetings do not need retrieval or web search.
  if (SIMPLE_MESSAGE.test(q)) {
    return "general";
  }

  // Explicit request to enrich document answers with outside context.
  if (
    documentSelected &&
    (enrichDocument || ENRICHMENT_CUES.test(q))
  ) {
    return "document_web";
  }

  // Writing and coding tasks usually do not need web search.
  if (WRITING_OR_CODING_TASK.test(q)) {
    return documentSelected ? "document" : "general";
  }

  // Use the selected document when one is available.
  if (documentSelected) {
    return "document";
  }

  // Ordinary questions use the LLM without retrieval.
  return "general";
}