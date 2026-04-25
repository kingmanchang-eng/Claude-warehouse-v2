from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime


class InquiryRequest(BaseModel):
    name: Optional[str] = None
    company: Optional[str] = None
    email: str
    phone: Optional[str] = None
    message: Optional[str] = None
    source: str = "mcp"


class InquiryResponse(BaseModel):
    id: int
    email: str
    created_at: datetime
    message: str = "Inquiry submitted successfully."


class ProductResult(BaseModel):
    id: int
    name: str
    model_number: Optional[str] = None
    category: Optional[str] = None
    payload_kg: Optional[float] = None
    speed_ms: Optional[float] = None
    description: Optional[str] = None
    specs: dict = {}
    use_cases: Optional[List[str]] = None
    page_url: Optional[str] = None


class SolutionResult(BaseModel):
    id: int
    name: str
    slug: Optional[str] = None
    description: Optional[str] = None
    key_metrics: dict = {}
    related_products: Optional[List[str]] = None
    page_url: Optional[str] = None


class FAQResult(BaseModel):
    id: int
    question: str
    answer: str
    category: Optional[str] = None


class RAGResult(BaseModel):
    content: str
    source: Optional[str] = None
    similarity: float
    metadata: dict = {}


class SearchResponse(BaseModel):
    query: str
    results: List[RAGResult]
    total: int


class MCPExecuteRequest(BaseModel):
    tool: str = Field(..., description="Tool name: search | list_products | get_product | list_solutions | list_faqs | submit_inquiry")
    args: dict = Field(default={}, description="Tool arguments as key-value pairs")


class MCPExecuteResponse(BaseModel):
    tool: str
    result: object
    ok: bool = True
